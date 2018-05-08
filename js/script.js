async function asyncMapSerial(array, fn) {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        result.push(await fn(array[index]));
    }
    return result;
}

async function promiseAllWheelInvent(promises) {
    const result = [];
    for (let index = 0; index < promises.length; index++) {
        result.push(await promises[index]);
    }
    return result;
}

function asyncMapParallel(array, fn) {
    return promiseAllWheelInvent(array.map(fn));
}

class ImageLoader {
    constructor(urls) {
        this.urls = urls;
    }

    loadOneImage(url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = function() {
                console.log('Load image succeeded: ' + url);
                resolve(image);
            };
            image.onerror = function() {
                console.log('Load image failed: ' + url);
                reject('Failed to load ' + url);
            }
            console.log('Load image started: ' + url);
            image.src = url;
        });
    }

    loadImages() {
        return Promise.all(this.urls.map(this.loadOneImage));
    }

    loadImagesSerial() {
        return asyncMapSerial(this.urls, this.loadOneImage);
    }

    loadImagesWheelInvent() {
        return asyncMapParallel(this.urls, this.loadOneImage);
    }
}

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

context.font='60px Arial';
context.textAlign = 'center';
context.textBaseline = 'middle';

context.fillStyle = 'black';
context.fillText('Loading data...', 500, 350);

(async function() {
    const loader = new ImageLoader(['https://httpbin.org/image/jpeg', 'https://httpbin.org/image/png']);
    try {
        const result = await loader.loadImagesWheelInvent();
        context.clearRect(0, 0, canvas.width, canvas.height);
        let offset = 100;
        result.forEach(element => {
            context.drawImage(element, offset, offset);
            offset += 200;
        });
    } catch (err) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillText('Load failed', 500, 350);
        alert(err);
    }
})();
