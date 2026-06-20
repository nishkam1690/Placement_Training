import { useState } from "react";
import API from "../api/courseApi";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All Fields Required");
      return;
    }

    try {
      await API.post("/contact", formData);
      toast.success("Message Sent Successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed To Send Message");
    }
  }

  async function fetchMessages() {
    setLoadingMessages(true);
    try {
      const response = await API.get("/contact");
      setMessages(response.data);
      setShowMessages(true);
    } catch (error) {
      toast.error("Failed to load messages");
    } finally {
      setLoadingMessages(false);
    }
  }

  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <br />
        <textarea
          rows="5"
          placeholder="Enter Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <br />
        <br />
        <div className="button-row">
          <button type="submit" className="primary-btn">Send Message</button>
          <button
            type="button"
            className="secondary-btn"
            onClick={() => (messages.length ? setShowMessages(!showMessages) : fetchMessages())}
          >
            {showMessages ? "Hide Messages" : "Show Messages"}
          </button>
        </div>
      </form>

      {loadingMessages && <p className="loading-text">Loading messages...</p>}

      {showMessages && (
        <div className="messages-list">
          {messages.length === 0 ? (
            <p className="empty-text">No messages found.</p>
          ) : (
            messages.map((m) => (
              <div key={m._id} className="message-item">
                <div className="message-header">
                  <strong>{m.name}</strong>
                  <span>{m.email}</span>
                </div>
                <p>{m.message}</p>
                <small>{new Date(m.createdAt).toLocaleString()}</small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Contact;
