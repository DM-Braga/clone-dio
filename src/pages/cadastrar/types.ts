import React from "react";

export interface IFormData {
  name: string;
  email: string;
  password: string;
}

export interface IReference {
  onClick?: (() => void);
}