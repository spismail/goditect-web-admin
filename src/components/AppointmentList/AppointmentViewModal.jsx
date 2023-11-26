import React, { useState, useEffect } from "react";
import { Button, Modal, Tooltip } from "flowbite-react";
function AppointmentViewModal({ open, closeModalHandler, items }) {
  const {
    name: apName,
    email: apEmail,
    phone: apPhone,
    skypeID: apSkypeID,
    subject: apSubject,
    message: apMessage,
    times,
  } = items || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skype, setSkype] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setName(apName);
    setEmail(apEmail);
    setPhone(apPhone);
    setSkype(apSkypeID);
    setSubject(apSubject);
    setMessage(apMessage);
  }, [apEmail, apMessage, apName, apPhone, apSkypeID, apSubject]);

  return (
    <>
      <div className="w-[50%]">
        <Modal show={open} onClose={closeModalHandler}>
          <Modal.Header>
            <p>Appointment Request</p>
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
                    placeholder="Skype ID"
                    className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                    value={skype}
                    onChange={(e) => setSkype(e.target.value)}
                    disabled
                  />
                </div>
                <div>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full p-3 border-0 bg-[#F3F5FE] outline-none rounded-md focus:border focus:border-[#FDD5EC]"
                    disabled
                  >
                    <option selected hidden value="">
                      Which service are you enquiring about?
                    </option>
                    <option value="Digital marketing">Digital marketing</option>
                    <option value="Wordpress solution">
                      Wordpress solution
                    </option>
                    <option value="Graphics design">Graphics design</option>
                    <option value="Web design">Web design</option>
                    <option value="Web development">Web development</option>
                    <option value="App development">App development</option>
                  </select>
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
            <Button color="failure" onClick={closeModalHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default AppointmentViewModal;
