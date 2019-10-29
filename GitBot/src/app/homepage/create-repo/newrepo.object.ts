export class NewRepository {
    name: string;
    description: string;
    homepage: string;
    'private': boolean;
    has_issues: boolean;
    has_wiki: boolean;

    constructor() {
        this.private = false;
        this.has_issues = true;
        this.has_wiki = true;
    }

}