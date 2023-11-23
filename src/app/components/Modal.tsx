"use client";

import React, { FC, PropsWithChildren, useState } from "react";

type Props = PropsWithChildren<{
  isOpen: boolean;
  setIsOpen: any;
}>;

const Modal: FC<Props> = (props: Props) => {
  const { children, isOpen, setIsOpen } = props;
  return (
    <>
      <dialog id="my_modal_2" className="modal" open={isOpen}>
        <div className="modal-box">{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsOpen(false)}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
