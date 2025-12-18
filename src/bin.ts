#!/usr/bin/env node
import { hwid } from "./index";

void hwid().then(console.log).catch(console.error);
