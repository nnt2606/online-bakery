import React from 'react'
import { useState } from 'react';

export default function Option({ selected, value, title}) {
  return (
        <option value={value}>
          {title}
        </option>

  );
}
