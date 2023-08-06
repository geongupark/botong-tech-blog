// const fs = require('fs');
import fs from 'fs';
// const path = require('path');
import path from 'path';
// const matter = require('gray-matter');
import matter from 'gray-matter';

// Directory containing your Markdown files
const markdownDir = 'path/to/markdown/files';

// Function to recursively traverse the directory and retrieve information about tags from Markdown files
function getTagsFromMarkdownFiles(rootPath, directoryPath) {
  const fullPath =path.join(rootPath, directoryPath);
  const files = fs.readdirSync(fullPath);
  const extension = '.md';
  const tags = {};

  files.forEach((file) => {
    const filePath = path.join(fullPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const subTags = getTagsFromMarkdownFiles(rootPath, path.join(directoryPath, file));
      Object.entries(subTags).forEach(([tag, pages]) => {
        if (tags[tag]) {
          tags[tag].push(...pages);
        } else {
          tags[tag] = pages;
        }
      });
    } else if (path.extname(file) === '.md') {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      if (data.tags && Array.isArray(data.tags)) {
        data.tags.forEach((tag) => {
          if (tags[tag]) {
            tags[tag].push({ title: data.title, description: data.description, link: path.join(directoryPath, path.basename(file, extension)).replace(/\\/gi, "/") });
          } else {
            tags[tag] = [{ title: data.title, description: data.description, link: path.join(directoryPath, path.basename(file, extension)).replace(/\\/gi, "/") }];
          }
        });
      }
    }
  });

  return tags;
}

// Usage
// const tags = getTagsFromMarkdownFiles(markdownDir);
// console.log(tags);
export {getTagsFromMarkdownFiles};