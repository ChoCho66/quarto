---@diagnostic disable: undefined-global
---
--- Writer for markdown that preserves raw html attributes.
--- 
--- This changed in pandoc 3.2, see https://github.com/rstudio/rstudio/issues/15189.

local html_formats = pandoc.List{'html', 'html4', 'html5'}
function Writer (doc, opts)
  if opts.extensions:includes 'raw_attribute' then
    doc = doc:walk{
      RawBlock = function (raw)
        if html_formats:includes(raw.format) then
          local md = pandoc.write(pandoc.Pandoc(raw), 'markdown-raw_html')
          return pandoc.RawBlock('markdown', md)
        end
      end
    }
  end
  return pandoc.write(doc, {format = 'markdown', extensions = opts.extensions}, opts)
end

Extensions = pandoc.format.extensions 'markdown'
Template = pandoc.template.default 'markdown'