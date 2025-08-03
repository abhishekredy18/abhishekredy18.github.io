---
layout: archive
title: "Resume"
permalink: /resume/
author_profile: true
---

{% include base_path %}

<style>
  .pdf-container {
    width: 100%;
    height: 80vh;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 20px 0;
  }
  
  .pdf-embed {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  .fallback-message {
    text-align: center;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 5px;
    margin: 20px 0;
  }
</style>

## My Resume

<div class="pdf-container">
  <embed src="{{ base_path }}/files/Abhishek Malreddy.pdf" type="application/pdf" class="pdf-embed">
  
  <div class="fallback-message">
    <p><strong>Cannot display PDF?</strong></p>
    <p>Your browser doesn't support embedded PDFs. Please <a href="{{ base_path }}/files/Abhishek Malreddy.pdf" download>download the resume</a> to view it.</p>
  </div>
</div>
