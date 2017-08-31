class FirebaseDatabase implements Database {

    save(): Promise<Object> {
        console.log('firebase!');
        return Promise.resolve({});
    }

}

class MysqlDatabase implements Database {

    save(): Promise<Object> {
        console.log('mysql!');
        return Promise.resolve({});
    }

}


export default ({ provider }: { provider: DatabaseProvider }): Database => {
    console.info('Init Database module');
    console.info('Provider', DatabaseProvider[provider]);
    return strategy.get(provider);
}

export interface Database {
    save(): Promise<Object>;
}

export enum DatabaseProvider {
    MYSQL,
    FIREBASE
}

const strategy = new Map<DatabaseProvider, Database>();
strategy.set(DatabaseProvider.MYSQL, new MysqlDatabase);
strategy.set(DatabaseProvider.FIREBASE, new FirebaseDatabase);