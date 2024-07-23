import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { HashLoader } from "react-spinners";

import styles from "../Prescription.module.css";
import { BACKEND_URL } from "../gloalConstant";

export default function Prescription() {
  const [prescription, setPrescription] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPrescription();
  }, []);
  const auth = JSON.parse(localStorage.getItem("user"));
  console.log(auth.user.fullName);
  async function getPrescription() {
    try {
      setIsLoading(true);
      if (!auth || !auth.token) {
        throw new Error("No auth token found");
      }

      const response = await fetch(`${BACKEND_URL}/user/prescriptions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${auth.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const results = await response.json();

      setPrescription(results.appointments);
    } catch (error) {
      console.error("Fetch error: ", error);
      setPrescription([]);
    } finally {
      setIsLoading(false);
    }
  }
  console.log(prescription);

  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <HashLoader color="#1D3557" />
        </div>
      )}
      <div className="text-center mt-5 mb-3">
        <p className="h1">My Prescriptions</p>
      </div>
      {prescription.length > 0 ? (
        prescription.map((item, index) => (
          <div className="prescription-accordion">
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Prescription by {item.doctorName}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className={styles.container}>
                    <header className={styles.row}>
                      <div className={styles.col10}>
                        <div className={styles.docDetails}>
                          <p className={styles.docName}>{item.doctorName}</p>
                          <p className={styles.docMeta}>
                            {item.doctorSpeciality}
                          </p>
                        </div>
                      </div>
                      <div className={`${styles.col2} ${styles.datetime}`}>
                        <p>Date:- {item.appointmentOn}</p>
                        <p>Time:- {item.appointmentAt}</p>
                      </div>
                    </header>
                    <div className={styles.prescription}>
                      <p
                        style={{
                          marginLeft: "15px",
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Rx
                        <br /> {auth.user.fullName}
                      </p>
                      <p style={{ fontSize: "12px", padding: "19px" }}>
                        {item.prescription !== null
                          ? item.prescription
                          : "Prescription is yet to be given"}
                        {/* {item.prescription} */}
                      </p>
                    </div>

                    <p
                      style={{
                        fontSize: "9px",
                        textAlign: "right",
                        paddingBottom: "15px",
                        paddingRight: "25px",
                      }}
                    ></p>
                    <p
                      style={{
                        fontSize: "6px",
                        textAlign: "center",
                        paddingBottom: "20px",
                      }}
                    >
                      This is a digitally generated Prescription
                    </p>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        ))
      ) : (
        <center>
          <p>no prescription found</p>
        </center>
      )}
    </>
  );
}
