import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

export default function ProjectDetails({ project }) {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button auto color='warning' shadow onPress={handler}>
        View Details
      </Button>
      <Modal
        closeButton
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            E-PDS
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text size={18}>Title: {project.title}</Text>
          <Text size={18}>TeamLead: {project.teamLead}</Text>
          <Text size={18}>Domain: {project.domain}</Text>
          <Text size={18}>Description: {project.description}</Text>
          <Text size={18}>Project Url: {project.projectReportUrl}</Text>
          <Text size={18}>
            Team Members:
            {project.teamMembers.map((name) => (
              <h1>{name}</h1>
            ))}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='warning' onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
