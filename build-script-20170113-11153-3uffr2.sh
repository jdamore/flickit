#!/bin/bash

source /opt/local/gnocci/script/build-support.sh

eval_knieval if\ \[\ -f\ \$HOME/.npmrc\ \]\;\ then\ sed\ -e\ \'/\^prefix\=/d\'\ -i\ \~/.npmrc\;\ fi
eval_knieval nvm\ install\ v0.10.37\ 2\>/dev/null
eval_knieval if\ \[\ -d\ \$\{SNAP_CACHE_DIR\}/node_modules\ \]\;\ then\ sudo\ mv\ -f\ \$\{SNAP_CACHE_DIR\}/node_modules\ .\;\ sudo\ chown\ -R\ --no-dereference\ go:go\ node_modules\;\ fi
eval_knieval nvm\ install\ 5.0
eval_knieval nvm\ use\ 5.0
eval_knieval npm\ install
eval_knieval git\ merge\ master
eval_knieval npm\ run\ build
eval_knieval git\ add\ --all
eval_knieval git\ status
eval_knieval git\ commit\ -m\ \"New\ changes\ from\ CI\ build\"\ --allow-empty
eval_knieval git\ push
eval_knieval if\ \[\ -d\ node_modules\ \]\;\ then\ sudo\ mv\ -f\ node_modules\ \$\{SNAP_CACHE_DIR\}/\;\ sudo\ chown\ -R\ --no-dereference\ go:go\ \$\{SNAP_CACHE_DIR\}/node_modules\;\ fi
