class SwipeEvent {
    touchstartX: any;
    touchstartY: any;
    touchendX: any;
    touchendY: any;
    constructor() {
        window.document.body.addEventListener('touchstart', (event) => {
            this.touchstartX = event.changedTouches[0].screenX;
            this.touchstartY = event.changedTouches[0].screenY;
        }, false);

        window.document.body.addEventListener('touchend', (event) => {
            this.touchendX = event.changedTouches[0].screenX;
            this.touchendY = event.changedTouches[0].screenY;
            this.handleGesture();
        }, false);
    }

    handleGesture() {
        if (this.touchendX < this.touchstartX) {
            window.document.body.dispatchEvent(new CustomEvent('swiped-left'));
        }

        if (this.touchendX > this.touchstartX) {
            window.document.body.dispatchEvent(new CustomEvent('swiped-right'));
        }

        if (this.touchendY < this.touchstartY) {
            window.document.body.dispatchEvent(new CustomEvent('swiped-up'));
        }

        if (this.touchendY > this.touchstartY) {
            window.document.body.dispatchEvent(new CustomEvent('swiped-down'));
        }
    }
}

export default SwipeEvent;
