import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { getEmail } from "@/utils/jwtVerifier";
import axios from "axios";
import { headers } from "next/dist/client/components/headers";
import { useRouter } from "next/router";

export default function UploadProject() {
  const [visible, setVisible] = React.useState(false);
  const [title, setTitle] = useState("");
  const [teamlead, setTeamLead] = useState("");
  const [domain, setDOmain] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [mem1, setMem1] = useState("");
  const [mem2, setMem2] = useState("");
  const [mem3, setMem3] = useState("");

  const handler = () => setVisible(true);
  const router = useRouter();

  const postProject = async () => {
    const response = await axios.post(
      "http://localhost:8080/api/client/newProject",
      {
        title: title,
        teamLead: teamlead,
        domain: domain,
        description: desc,
        projectReportUrl: url,
        teamMembers: [mem1, mem2, mem3],
        clientEmail: getEmail(localStorage.getItem("token")),
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    console.log(response.data);
    router.reload();
  };

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button auto color='warning' shadow onPress={handler}>
        Add a new project
      </Button>
      <Modal
        closeButton
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Add the project details
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color='warning'
            size='lg'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='warning'
            size='lg'
            placeholder='Teamlead'
            onChange={(e) => setTeamLead(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='warning'
            size='lg'
            placeholder='Domain'
            onChange={(e) => setDOmain(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='warning'
            size='lg'
            placeholder='Description'
            onChange={(e) => setDesc(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='warning'
            size='lg'
            placeholder='Project Report URL'
            onChange={(e) => setUrl(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='warning'
            size='lg'
            placeholder='Team Member 1'
            onChange={(e) => setMem1(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='warning'
            size='lg'
            placeholder='Team Member 2'
            onChange={(e) => setMem2(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='warning'
            size='lg'
            placeholder='Team Member 3'
            onChange={(e) => setMem3(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='warning' onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={postProject} color='warning'>
            Upload Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
