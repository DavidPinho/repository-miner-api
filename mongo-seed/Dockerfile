FROM mongo

COPY . /
# TODO: Replace the sleep command with a proper wait-for.sh script
CMD sleep 10 && mongoimport --host mongo --db rm-db --type json --file /repositories.json --jsonArray && mongoimport --host mongo --db rm-db --type json --file /references.json --jsonArray