class ImageLoader {
    constructor(urls) {
        this.urls = urls;
    }

    getPromiseOne(url) {
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

    getPromise() {
        return Promise.all(this.urls.map(this.getPromiseOne));
    }
}

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

context.font='60px Arial';
context.textAlign = 'center';
context.textBaseline = 'middle';

context.fillStyle = 'black';
context.fillText('Loading data...', 500, 350);

const loader = new ImageLoader(['https://httpbin.org/image/jpeg', 'https://httpbin.org/image/png']);
loader.getPromise()
    .then(result => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let offset = 100;
        result.forEach(element => {
            context.drawImage(element, offset, offset);
            offset += 200;
        });
    })
    .catch(err => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillText('Load failed', 500, 350);
        alert(err);
    });
