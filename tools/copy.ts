import * as shell from "shelljs";

shell.cp('-R', ['./src/public/css/', './src/public/img/'], './dist/public/')
shell.cp('-R', './src/views/', './dist/')