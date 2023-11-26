import React from "react";
import { Button, Modal, Tooltip } from "flowbite-react";
import GoogleMapReact from "google-map-react";
function AppointmentLocationMapModal({
  location,
  closeMapmodalHandler,
  items,
}) {
  const { latitude, longitude } = items || {};

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 11,
  };
  return (
    <div>
      <Modal show={location} onClose={closeMapmodalHandler}>
        <Modal.Header>
          <p>User Location</p>
        </Modal.Header>
        <Modal.Body>
          <div className="w-[100%] h-[400px]">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={closeMapmodalHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AppointmentLocationMapModal;
