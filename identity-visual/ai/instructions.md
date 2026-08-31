# Copilot Instructions – Visual Identity

## Visual guide

`DESIGN.md` is the repository's primary visual guide. Before creating or modifying resources, consult [DESIGN.md](../DESIGN.md) to follow the palette, typography, spacing, shapes, elevation, and components defined for the "Raíces de Esperanza" identity.

## Repository Architecture

The visual identity repository should remain clear, modular, and reusable across projects. Current structure:
/
├── DESIGN.md
├── ai/
│   └── instructions.md
├── copilot/
└── src/
	├── logos/
	│   ├── svg/
	│   ├── png/
	│   └── variantes/
	├── palettes/
	│   ├── primary.json
	│   ├── secondary.json
	│   └── neutrals.json
	├── typography/
	│   ├── fonts/
	│   └── guidelines.md
	├── icons/
	│   └── svg/
	├── mockups/
	│   └── ejemplos.md
	└── README.md

### Architecture Rules
- **Resource separation**: each category (logos, palettes, typography, icons) has its own folder.  
- **Standard formats**: use SVG for scalable assets, PNG for quick usage.  
- **Minimal documentation**: each folder includes a `README.md` or `guidelines.md`.  
- **Reusability**: assets must be designed for multiple projects (frontend, marketing, presentations).  
- **Simplicity**: keep structure lightweight, avoid redundancy.  

## Conventions

To ensure consistency and reusability across projects, follow these conventions:

### Naming
- Use **lowercase** with hyphens for file and folder names (e.g., `primary-palette.json`, `logo-main.svg`).
- Avoid spaces, special characters, or uppercase in filenames.
- Prefix variants with clear descriptors (e.g., `logo-dark.svg`, `logo-light.svg`).

### File Formats
- **SVG** for scalable assets (logos, icons).
- **PNG** for raster previews or quick usage.
- **JSON** for palettes to enable programmatic integration.

### Documentation
- Each folder must include a `README.md` or `guidelines.md` explaining usage.
- Keep documentation concise: purpose, usage rules, and examples.

### Versioning
- Use semantic versioning for releases (e.g., `v1.0.0`).
- Tag major updates to identity assets (new logo, palette changes).

### Style Guidelines
- Define typography usage: headings, body, accents.
- Specify color usage: primary, secondary, neutral.
- Provide mockups as reference for layout and branding.

## Technology Stack

The repository should use a lightweight and standard stack to ensure compatibility and easy integration across projects.

### Core Tools
- **GitHub**: version control, and releases.
- **npm/yarn**: package management for dependencies.
- **Prettier/ESLint**: enforce formatting and code style in JSON and Markdown.

### Formats & Standards
- **SVG**: vector graphics for logos and icons.
- **PNG**: raster previews.
- **JSON**: color palettes and typography metadata.
- **Markdown**: documentation (`README.md`, `guidelines.md`).