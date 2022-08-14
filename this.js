/*
    'This' in functions:

    So, basically, 'this' is a reference to the OBJECT that is executing the current function.

    Rules of thumb:
    1st   ---> If the function is part of an object, you call that function a method. So, if the function is a method in an object, 'this' references that object itself.
    2nd ---> If the function is a regular function which means it is not part of an object, 'this' reference is the global object which is the 'window' object in browsers and global in node.js.
*/

/* 
    Example fo 1st rule 

        const video = {
        title: 'a',
        play() {
            console.log(this);
        }
    };

    video.stop = function() {
        console.log(this);
    };

    video.stop()

*/ 

/*
    Example of 2nd rule


const video = {
    title: 'a',
    play() {
        console.log(this)
    }
};

function playVideo() {
    console.log(this)
};

playVideo();

*/
 /*
function Video(title) {
    this.title = title;
    console.log(this);
};

const v = new Video('b');
*/

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag)
        }, this);
    }
};

video.showTags();

