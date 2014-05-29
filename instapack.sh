#!/bin/bash
set -e -x

function run {
  meteor remove autopublish;
  meteor remove insecure;
  meteor add accounts-base;
  mrt add iron-router;
  mrt add collection2;
  mrt add handlebar-helpers;
  mrt add fast-render;
  mrt add collection-hooks;
  mrt add roles;
  mrt add moment-with-langs;
  mrt add robots-txt;
  mrt add sitemaps;
  mrt add bootstrap-3;
}

case "$1" in
run)
  run
  ;;
*)
  cat <<ENDCAT
prod [action]

Available actions:

run        - take off some packages and add others


ENDCAT
  ;;
esac
