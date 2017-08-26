FROM mongo

COPY . /
CMD mongoimport --host mongo --db rm-db --type json --file /repositories.json --jsonArray && mongoimport --host mongo --db rm-db --type json --file /references.json --jsonArray