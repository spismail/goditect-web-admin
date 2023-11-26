import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
function MessagesViewModal({ open, closeModalHandler, items }) {
  const {
    name: apName,
    email: apEmail,
    phone: apPhone,
    subject: apSubject,
    message: apMessage,
    times,
  } = items || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setName(apName);
    setEmail(apEmail);
    setPhone(apPhone);
    setSubject(apSubject);
    setMessage(apMessage);
  }, [apEmail, apMessage, apName, apPhone, apSubject]);

  return (
    <>
      <div className="w-[50%]">
        <Modal show={open} onClose={closeModalHandler}>
          <Modal.Header>
            <p>Message Request</p>
            <small className="text-sm text-gray-900">{times}</small>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    disabled
                  />
                </div>

                <div>
                  <textarea
                    disabled
                    type="text"
                    placeholder="Write your Message..."
                    className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                    rows={8}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" onClick={closeModalHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default MessagesViewModal;
