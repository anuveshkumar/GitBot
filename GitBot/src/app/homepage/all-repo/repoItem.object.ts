export class RepoItem {
    id: number;
    name: string;
    'private': boolean;
    clone_url: string;
    ssh_url: string;
    stargazers_count: number;
    watchers_count: number;
    created_at: string;
    description: string;

    constructor(id, name, access, clone_url, ssh_url, stargazers_count, created_at, description) {
        this.id = id;
        this.name = name;
        this.private = access;
        this.clone_url = clone_url;
        this.ssh_url = ssh_url;
        this.stargazers_count = stargazers_count;
        this.created_at = created_at;
        this.description = description;

    }
}