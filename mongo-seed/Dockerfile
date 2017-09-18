FROM mongo

COPY . /
# TODO: Replace the sleep command with a proper wait-for.sh script
CMD sleep 10 && mongoimport --host mongo --db rm-db --type json --file /rm_repository.json --jsonArray && mongoimport --host mongo --db rm-db --type json --file /rm_reference.json --jsonArray && mongoimport --host mongo --db rm-db --type json --file /rm_technical_code_debt.json --jsonArray