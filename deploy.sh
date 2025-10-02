#!/bin/bash

# Cora Portfolio - Build and Prepare for FTP Deployment
echo "🚀 Building Cora Portfolio for FTP deployment..."

# Build the static site
echo "📦 Building static site..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Static files are ready in the 'out/' directory"
    echo ""
    echo "📋 Next steps:"
    echo "1. Upload everything in the 'out/' folder to your web server"
    echo "2. Ensure files have proper permissions (644 for files, 755 for directories)"
    echo "3. Your site will be live!"
    echo ""
    echo "📊 Site info:"
    echo "- Total files: $(find out -type f | wc -l)"
    echo "- Total size: $(du -sh out | cut -f1)"
    echo ""
    echo "🎉 Ready for FTP deployment!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
