ls -1 *.json | sed 's/.json$//' | while read col; do 
    mongoimport --host mongo -d rm-db -c $col < $col.json;
done