const userData = { 
    username: "Reed",
    title: "JavaScript Programmer",
    getBio() {
      console.log(`User ${this.username} is a ${this.title}`);  //不用一直寫“userData"用this代替就好
    }  
  }
  
  userData.getBio();
//User Reed is a JavaScript Programmer

//從這邊開始真的不知道那個2000到底在幹嘛

  const userData = { 
    username: "Reed",
    title: "JavaScript Programmer",
    getBio() {
      console.log(`User ${this.username} is a ${this.title}`);
    },
    askToFriend() {
      setTimeout(function() {
        console.log(`Would you like to friend ${this.username}?`);   
      }, 2000);  
    } 
  }
  
  userData.askToFriend();

//Would you like to friend undefined? 這樣就不是我們想要的
//方法一
 const userData = { 
    username: "Reed",
    title: "JavaScript Programmer",
    getBio() {
      console.log(`User ${this.username} is a ${this.title}`);
    },
    askToFriend() {
      let that = this;
      setTimeout(function() {
        console.log(`Would you like to friend ${that.username}?`);   
      }, 2000);  
    } 
  }
  
  userData.askToFriend();
//Would you like to friend Reed? 有點複雜
//方法二 用arrow function
const userData = { 
    username: "Reed",
    title: "JavaScript Programmer",
    getBio() {
      console.log(`User ${this.username} is a ${this.title}`);
    },
    askToFriend() {
      setTimeout(() => {
        console.log(`Would you like to friend ${this.username}?`);   
      }, 2000);  
    } 
  }
  
  userData.askToFriend();
  //Would you like to friend Reed?