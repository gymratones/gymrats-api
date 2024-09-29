# Output the service ID
output "service_id" {
  value       = render_web_service.gymrats_api_service.id
  description = "The ID of the Render service"
}

# Output the service name
output "service_name" {
  value       = render_web_service.gymrats_api_service.name
  description = "The name of the Render service"
}

# Output the service URL
output "service_url" {
  value       = render_web_service.gymrats_api_service.url
  description = "The URL of the Render service"
}
