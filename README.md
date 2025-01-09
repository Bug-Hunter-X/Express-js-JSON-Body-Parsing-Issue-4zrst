# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue in Express.js applications where the `express.json()` middleware fails to parse the JSON request body correctly.  The bug and its solution are provided in separate JavaScript files. The bug is characterized by the server seemingly receiving an empty request body, even when a valid JSON payload is sent.

## Bug

The `bug.js` file contains the erroneous Express.js code that fails to properly parse JSON data. This commonly happens due to improper middleware placement or configuration issues.

## Solution

The `bugSolution.js` file shows the corrected code with a proper `express.json()` middleware placement and handling.