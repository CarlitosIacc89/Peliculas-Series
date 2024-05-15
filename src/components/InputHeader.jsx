"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const InputHeader = ({ className, menuActive, setMenuActive }) => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      router.push(`/search/${input}`);
      setInput("");
      if (menuActive !== undefined) {
        setMenuActive(!menuActive);
      }
    }
  };
  return (
    <input
      className={className}
      value={input}
      type="search"
      placeholder="Buscar"
      onChange={handleChange}
      onKeyUp={handleKeyUp}
    />
  );
};

export default InputHeader;
