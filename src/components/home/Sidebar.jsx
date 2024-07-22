import { useRef } from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";

function Sidebar({ userName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  function onBookAppointment() {
    navigate("/user/book-appointment");
    onClose();
  }

  function onViewPrescription() {
    navigate("/user/prescription");
    onClose();
  }

  function onLogout() {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT", payload: false });
    onClose();
    navigate("/");
  }

  return (
    <>
      <IconButton
        aria-label="Search database"
        icon={<RxHamburgerMenu />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">Welcome {userName}!</DrawerHeader>

          <DrawerBody display="flex" flexDirection="column" gap="25px">
            <Button variant="outline" mr={3} onClick={onBookAppointment}>
              Book Appointment
            </Button>
            <Button variant="outline" mr={3} onClick={onViewPrescription}>
              View Prescriptions
            </Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onLogout}>
              Log out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
