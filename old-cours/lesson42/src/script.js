function myModule() {
    this.hello = function() {
        return 'Hello!';
    }

    this.goodBye = function() {
        return 'Good Bye!';
    }
}

module.exports = myModule;