terraform {
  backend "remote" {
    organization = "gymrats"
    hostname     = "app.terraform.io"
    workspaces {
      prefix = "api-"
    }
  }

  required_providers {
    render = {
      source  = "render-oss/render"
      version = "1.1.0"
    }
  }
}

provider "render" {
  api_key  = var.provider_token
  owner_id = var.provider_account_id
}

resource "render_web_service" "gymrats_api_service" {
  name           = local.project_name
  plan           = "starter"
  region         = "frankfurt"
  start_command  = "npm start"

  runtime_source = {
    native_runtime = {
      auto_deploy   = true
      branch        = var.branch_name
      build_command = "npm install"
      build_filter = {
        paths         = ["src/**", "package.json"]
        ignored_paths = ["test/**"]
      }
      repo_url = "https://github.com/${var.github_repository}"
      runtime  = "node"
    }
  }

  env_vars = {
    "DB_HOST" = {
      value = var.db_host
    },
    "DB_PORT" = {
      value = var.db_port
    },
    "DB_USERNAME" = {
      value = var.db_username
    },
    "DB_PASSWORD" = {
      value = var.db_password
    },
    "DB_DATABASE" = {
      value = var.db_database
    }
    "NODE_ENV" = {
      value = var.node_env
    },
  }
}
