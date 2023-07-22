const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// edit post
router.put("/:id", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json("post edit ok");
    } else {
      return res.status(403).json("dont another user post edit");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

// delete post
router.delete("/:id", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json("post delete ok");
    } else {
      return res.status(403).json("dont another user post delete");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

// detail get post
router.get("/:id", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(err);
  }
});

//like
router.put("/:id/like", async (req, res) => {
  console.log(req.params.id);
  console.log(req.body.userId);
  try {
    const post = await Post.findById(req.params.id);
    //いいねが押さていなかったら
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json("like is push");
    } else {
      //いいね取り除く
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(403).json("aready this user follow");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get follow user post
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });

    //get follower post
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
