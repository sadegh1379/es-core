#!/bin/bash

# Step 1: Remove lines from package.json
sed -i '/"react": "\^18\.2\.0",/d' ./package.json
sed -i '/"react-dom": "\^18\.2\.0",/d' ./package.json
sed -i '/"next": "\^14\.2\.3",/d' ./package.json

# Step 2: Add lines before JSON closing tag
sed -i '/^\}$/i \  ,"peerDependencies": {\n    "react": "\^18\.2\.0",\n    "react-dom": "\^18\.2\.0",\n  "next": "\^14\.2\.3"\n  }' ./package.json