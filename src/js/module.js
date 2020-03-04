/*!
 * Breadcrumb.js
 * JavaScript component for creating breadcrumb menus
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */

// N/A

/* ================================ Variables =============================== */

let onHoverRow = {
  style: {}
};

/* ============================= Private Methods ============================ */

function _addElement(parent, type) {
  const element = document.createElement(type);
  parent.appendChild(element);
  return element;
}

function _onHoverDefault(element) {
  if (onHoverRow !== element) {
    // clear current styling
    onHoverRow.style.textDecoration = '';
    onHoverRow.style.color = '#007bff';
    // set new row
    onHoverRow = element;
    // set default styling
    element.style.textDecoration = 'underline';
    element.style.color = '#333';
  }
}

function _onClickDefault() {
  console.log('You clicked once!');
}

function _onDblClickDefault() {
  console.log('You double clicked!');
}

function _onEvent(element, defaultcb) {
  defaultcb(element);
}

function _containerRenderer() {
  const container = {};
  container.className = 'breadcrumb-menu';
  container.style = {
    display: 'flex',
    'flex-wrap': 'wrap',
    padding: '0.75rem 1rem',
    'margin-bottom': '1rem',
    'list-style': 'none',
    border: '1px solid rgba(0,0,0,.125)',
    'border-radius': '3px',
    'background-color': '#eee'
  };
  return container;
}

function _liRenderer() {
  const li = {};
  li.className = 'breadcrumb-menu__li';
  li.style = {
    display: 'inline-block',
    color: '#007bff'
  };
  return li;
}

function _separatorRenderer() {
  const sep = {};
  sep.className = 'breadcrumb-menu__separator';
  sep.style = {
    display: 'inline-block',
    padding: '0 0.5rem 0 0.5rem',
    color: '#6c757d'
  };
  return sep;
}

function _applyRender(element, properties) {
  const arr = Object.keys(properties);
  for (let i = 0; i < arr.length; i++) {
    const prop = arr[i];
    if (typeof properties[prop] === 'object' && properties[prop] !== null) {
      Object.assign(element[prop], properties[prop]);
    } else {
      element[prop] = properties[prop];
    }
  }
  return element;
}

function _addSeparator(ol) {
  const separator = _addElement(ol, 'span');
  separator.innerHTML = '/';
  const render = _separatorRenderer();
  _applyRender(separator, render);
  return separator;
}

function _addBreadcrumbs(ol, options) {
  const arr = options.breadcrumbs.items;
  // loop through all breadcrumb menu items and add to menu
  for (let i = 0; i < arr.length; i++) {
    const breadcrumb = arr[i];
    // Get user configuration for each item
    const cnf = {
      onClick: breadcrumb.onClick || options.breadcrumbs.onClick || _onEvent,
      onDblClick: breadcrumb.onDblClick || options.breadcrumbs.onDblClick || _onEvent,
      onHover: breadcrumb.onHover || options.breadcrumbs.onHover || _onEvent,
      renderer: breadcrumb.renderer || options.breadcrumbs.renderer || _liRenderer
    };
    // add breadcrumb elements
    const li = _addElement(ol, 'li');
    const a = _addElement(li, 'a');
    // Add value
    a.innerHTML = arr[i].item;
    // calculate element css styling with supplied or default renderer
    const render = cnf.renderer(breadcrumb);
    // configure element
    _applyRender(li, render);
    // add separator
    if (i < arr.length - 1) {
      _addSeparator(ol);
    }
    // apply menu item functionality
    li.onclick = function onclick() {
      return cnf.onClick(li, _onClickDefault);
    };
    li.ondblclick = function ondblclick() {
      return cnf.onDblClick(li, _onDblClickDefault);
    };
    li.onmouseover = function onmouseover() {
      return cnf.onHover(li, _onHoverDefault);
    };
    li.onmouseout = function onmouseout() {
      const dummyElement = { style: {} };
      return cnf.onHover(dummyElement, _onHoverDefault);
    };
  }
}

function _addContainer(frag, options) {
  const cnf = {
    renderer: options.render || _containerRenderer
  };
  // add basic breacrumb structure
  const nav = _addElement(frag, 'nav');
  const ol = _addElement(nav, 'ol');
  // calculate element css styling with supplied or default renderer
  const render = cnf.renderer(ol);
  // configure element
  _applyRender(ol, render);
  return ol;
}

/* ============================== Public Methods ============================ */

/**
 * init - constructor for generating  breadcrumb menu. Accepts the following
 * configuration options.
   const options = {
     'div': 'container',
     'renderer': null,
     'breadcrumbs': {
       'renderer': null,
       'onClick': null,
       'onDblClick': null,
       'onHover': null,
       'items': [{
         'item': 'Photos',
         'renderer': null,
         'onClick': null,
         'onDblClick': null,
         'onHover': null
       }]
     }
   }
 */
function init(options) {
  // Create DOM fragment
  const frag = document.createDocumentFragment();
  // Add container elements
  const ol = _addContainer(frag, options);
  // Add breadcrumb menu items
  _addBreadcrumbs(ol, options);
  // Append fragment to DOM
  const div = document.getElementById(options.div);
  div.appendChild(frag);
}

/* =========================== Export Public APIs =========================== */

export default {
  init
};
