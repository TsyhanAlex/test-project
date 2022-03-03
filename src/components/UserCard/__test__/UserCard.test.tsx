import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserCard } from '../UserCard';

const user = {
  id: NaN,
  node_id: '',
  name: '',
  full_name: '',
  private: false,
  owner: {
    login: '',
    id: NaN,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false
  },
  html_url: '',
  description: '',
  fork: false,
  url: '',
  forks_url: '',
  keys_url: '',
  collaborators_url: '',
  teams_url: '',
  hooks_url: '',
  issue_events_url: '',
  events_url: '',
  assignees_url: '',
  branches_url: '',
  tags_url: '',
  blobs_url: '',
  git_tags_url: '',
  git_refs_url: '',
  trees_url: '',
  statuses_url: '',
  languages_url: '',
  stargazers_url: '',
  contributors_url: '',
  subscribers_url: '',
  subscription_url:'',
  commits_url: '',
  git_commits_url: '',
  comments_url: '',
  issue_comment_url: '',
  contents_url: '',
  compare_url: '',
  merges_url: '',
  archive_url: '',
  downloads_url: '',
  issues_url: '',
  pulls_url: '',
  milestones_url: '',
  notifications_url: '',
  labels_url: '',
  releases_url: '',
  deployments_url: '',
  created_at: '',
  updated_at: '',
  pushed_at: '',
  git_url: '',
  ssh_url: '',
  clone_url: '',
  svn_url: '',
  homepage: '',
  size: NaN,
  stargazers_count: NaN,
  watchers_count: NaN,
  language: '',
  has_issues: false,
  has_projects: false,
  has_downloads: false,
  has_wiki: false,
  has_pages: false,
  forks_count: NaN,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: NaN,
  license: {
    key: '',
    name: '',
    spdx_id: '',
    url: '',
    node_id: ''
  },
  allow_forking: true,
  is_template: false,
  topics: [],
  visibility: '',
  forks: NaN,
  open_issues: NaN,
  watchers: NaN,
  default_branch: '',
  score: NaN
}

describe('UserCard', () => {
  it("should render UserCard", () => {
    render(<UserCard user={user} />);
    expect(screen.getByText(/Open on Github/i)).toBeInTheDocument();
  });
})