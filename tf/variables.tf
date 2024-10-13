variable "provider_token" {
  type        = string
  description = "Provider Token"
}

variable "provider_account_id" {
  type        = string
  description = "Provider Account ID"
}

variable "github_repository" {
  type        = string
  description = "Full Github repository name"
}

variable "branch_name" {
  type        = string
  description = "Name of the current Git branch"
}

variable "db_host" {
  type        = string
  description = "Database host IP"
}

variable "db_port" {
  type        = string
  description = "Database port"
}

variable "db_username" {
  type        = string
  description = "Database username"
}

variable "db_password" {
  type        = string
  description = "Database password"
}

variable "db_database" {
  type        = string
  description = "Database"
}

variable "node_env" {
  type        = string
  description = "Node environment"
}

variable "jwt_secret" {
  type        = string
  description = "JWT Secret"
}
