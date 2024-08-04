+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true
authors = ['{{ .Site.Params.editor.name }}']
table_of_contents = false
categories = ['uncategorised']
+++