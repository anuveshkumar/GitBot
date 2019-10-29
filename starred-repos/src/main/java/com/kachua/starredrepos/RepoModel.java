package com.kachua.starredrepos;

import javax.persistence.Entity;

@Entity
public class RepoModel {

    @javax.persistence.Id
    private Long Id;

    private String name;
    private boolean access;
    private String clone_url;
    private String ssh_url;
    private Integer stargazers_count;
    private String created_at;
    private String description;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isAccess() {
        return access;
    }

    public void setAccess(boolean access) {
        this.access = access;
    }

    public String getClone_url() {
        return clone_url;
    }

    public void setClone_url(String clone_url) {
        this.clone_url = clone_url;
    }

    public String getSsh_url() {
        return ssh_url;
    }

    public void setSsh_url(String ssh_url) {
        this.ssh_url = ssh_url;
    }

    public Integer getStargazers_count() {
        return stargazers_count;
    }

    public void setStargazers_count(Integer stargazers_count) {
        this.stargazers_count = stargazers_count;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public RepoModel(Long id, String name, boolean access, String clone_url, String ssh_url, Integer stargazers_count, String created_at, String description) {
        Id = id;
        this.name = name;
        this.access = access;
        this.clone_url = clone_url;
        this.ssh_url = ssh_url;
        this.stargazers_count = stargazers_count;
        this.created_at = created_at;
        this.description = description;
    }

    public RepoModel() {
    }

    @Override
    public String toString() {
        return "RepoModel{" +
                "Id=" + Id +
                ", name='" + name + '\'' +
                ", access=" + access +
                ", cloneUrl='" + clone_url + '\'' +
                ", sshUrl='" + ssh_url + '\'' +
                ", stargazersCount=" + stargazers_count +
                ", createdAt='" + created_at + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
