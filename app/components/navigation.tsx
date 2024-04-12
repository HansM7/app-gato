"use client";

import { Button, Modal, Typography } from "keep-react";
import Link from "next/link";
import { CloudArrowUp } from "phosphor-react";
import { useState } from "react";

function Navigation({
  isDrawer,
  setIsDrawer,
}: {
  isDrawer: any;
  setIsDrawer: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className=" w-16 left-0 top-0  flex flex-col justify-between min-h-svh bg-white items-center shadow-lg border-r">
        <div className="h-[100%] flex flex-col justify-between items-center  py-4">
          <Link href={""}>
            <img className="w-16" src="gato-icon.png" alt="" />
          </Link>
          <div className="flex flex-col gap-1">
            {/* <div className="-rotate-90">
              <span className="w-full ">GATO</span>
            </div> */}
            <span>G</span>
            <span>A</span>
            <span>T</span>
            <span>O</span>
          </div>
          <div>
            {isDrawer ? (
              <svg
                role="button"
                onClick={() => setIsDrawer(false)}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 70 70"
              >
                <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
              </svg>
            ) : (
              <svg
                role="button"
                onClick={() => setIsDrawer(true)}
                data-testid="geist-icon"
                height="16"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  className="fill-black"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM6 7.25H6.75H14.25H15V8.75H14.25H6.75H6V7.25ZM4 12.5H4.75H14.25H15V14H14.25H4.75H4V12.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
          </div>

          <div>
            <svg
              role="button"
              onClick={openModal}
              viewBox="0 0 256 259"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z"
                fill="#00E676"
              />
              <path
                d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z"
                fill="#FFF"
              />
            </svg>
          </div>
          <Modal isOpen={isOpen} onClose={closeModal}>
            <Modal.Body className="space-y-3">
              <Modal.Content>
                <Typography variant="div" className="!mb-6">
                  <Typography
                    variant="h3"
                    className="mb-2 text-body-1 font-medium text-metal-900"
                  >
                    Renderización
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-body-4 font-normal text-metal-600"
                  >
                    Tenemos un canal exclusivo para atender clientes, da click
                    en el boton siguiente e inicia una conversación con nosotros
                  </Typography>
                </Typography>
              </Modal.Content>
              <Modal.Footer>
                <Button
                  onClick={closeModal}
                  size="sm"
                  variant="outline"
                  color="secondary"
                >
                  Cancel
                </Button>
                <Button onClick={closeModal} size="sm" color="success">
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal.Body>
          </Modal>
        </div>

        <div className="bg-[#0A86ED] flex justify-center items-center  text-center min-h-52 max-w-full overflow-hidden">
          <div className="-rotate-90   flex justify-center items-center min-w-48 ">
            <span className="w-full ">Get in touch</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
