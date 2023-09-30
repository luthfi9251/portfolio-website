import { toast, ToastContainer } from "react-toastify";

export default function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e.target[0].value);
    let postToAPI = fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[0].value,
        email: e.target[1].value,
        subject: e.target[2].value,
        message: e.target[3].value,
      }),
    });
    toast.promise(
      postToAPI,
      {
        pending: "Please wait, email is being send...",
        error: "Failed to sent email!",
        success: "Send email sucess!",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  };
  return (
    <div className="text-white w-full md:w-2/5 p-3 md:p-4 bg-c-dark-grey rounded-md">
      <h1 className="font-semibold text-lg block">Send me an email</h1>
      <form
        action=""
        className=" flex flex-col gap-2"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-1 rounded-sm text-sm bg-c-light-grey"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="p-1 rounded-sm text-sm bg-c-light-grey"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="text-sm">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="p-1 rounded-sm text-sm bg-c-light-grey"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            className="p-1 rounded-sm text-sm bg-c-light-grey"
            required
            rows="6"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="py-2 w-2/5 hover:bg-c-light-green transition-all bg-c-dark-green self-center rounded-lg"
        />
      </form>

      <ToastContainer />
    </div>
  );
}
