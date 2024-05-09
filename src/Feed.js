import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { db } from "./firebase";
import {
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        name: "Omole Daniel",
        description: "this is a test",
        message: input,
        photoUrl: "",
        timestamp: serverTimestamp(), // or use Firebase server timestamp
      });

      // Reset the input field after sending the post
      setInput("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
