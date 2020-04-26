function handleLikePost() {
    let likeCount = 0;
    return function addLike() {
      likeCount += 1;    
      return likeCount;
    }
  //   addLike();
    console.log('like count:', likeCount);
  }
  
  const like = handleLikePost();
  
  console.log(like());
  console.log(like());
  console.log(like());

  //會跑出
  //1
  //2
  //3

  function handleLikePost(step) {
    let likeCount = 0;
    return function addLike() {
      likeCount += step;    
      return likeCount;
    }
  //   addLike();
    console.log('like count:', likeCount);
  }
  
  const doubleLike = handleLikePost(2);
  
  console.log(doubleLike());
  console.log(doubleLike());
  console.log(doubleLike());

  //會跑出
  //2
  //4
  //6