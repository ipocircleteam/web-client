"use strict";
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 25710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.SliderValueLabel = exports.SliderTrack = exports.SliderThumb = exports.SliderRoot = exports.SliderRail = exports.SliderMarkLabel = exports.SliderMark = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(54845));
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(80391));
var _utils = __webpack_require__(44268);
var _base = __webpack_require__(93832);
var _useSlider = __webpack_require__(49076);
var _system = __webpack_require__(19659);
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
var _styled = _interopRequireWildcard(__webpack_require__(76276));
var _useTheme = _interopRequireDefault(__webpack_require__(48650));
var _shouldSpreadAdditionalProps = _interopRequireDefault(__webpack_require__(97928));
var _capitalize = _interopRequireDefault(__webpack_require__(20587));
var _SliderValueLabel = _interopRequireDefault(__webpack_require__(91835));
var _sliderClasses = _interopRequireWildcard(__webpack_require__(51559));
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["aria-label", "aria-valuetext", "aria-labelledby", "component", "components", "componentsProps", "color", "classes", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "size", "step", "scale", "slotProps", "slots", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Identity(x) {
  return x;
}
const SliderRoot = (0, _styled.default)('span', {
  name: 'MuiSlider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`color${(0, _capitalize.default)(ownerState.color)}`], ownerState.size !== 'medium' && styles[`size${(0, _capitalize.default)(ownerState.size)}`], ownerState.marked && styles.marked, ownerState.orientation === 'vertical' && styles.vertical, ownerState.track === 'inverted' && styles.trackInverted, ownerState.track === false && styles.trackFalse];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  borderRadius: 12,
  boxSizing: 'content-box',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer',
  touchAction: 'none',
  color: (theme.vars || theme).palette[ownerState.color].main,
  WebkitTapHighlightColor: 'transparent'
}, ownerState.orientation === 'horizontal' && (0, _extends2.default)({
  height: 4,
  width: '100%',
  padding: '13px 0',
  // The primary input mechanism of the device includes a pointing device of limited accuracy.
  '@media (pointer: coarse)': {
    // Reach 42px touch target, about ~8mm on screen.
    padding: '20px 0'
  }
}, ownerState.size === 'small' && {
  height: 2
}, ownerState.marked && {
  marginBottom: 20
}), ownerState.orientation === 'vertical' && (0, _extends2.default)({
  height: '100%',
  width: 4,
  padding: '0 13px',
  // The primary input mechanism of the device includes a pointing device of limited accuracy.
  '@media (pointer: coarse)': {
    // Reach 42px touch target, about ~8mm on screen.
    padding: '0 20px'
  }
}, ownerState.size === 'small' && {
  width: 2
}, ownerState.marked && {
  marginRight: 44
}), {
  '@media print': {
    colorAdjust: 'exact'
  },
  [`&.${_sliderClasses.default.disabled}`]: {
    pointerEvents: 'none',
    cursor: 'default',
    color: (theme.vars || theme).palette.grey[400]
  },
  [`&.${_sliderClasses.default.dragging}`]: {
    [`& .${_sliderClasses.default.thumb}, & .${_sliderClasses.default.track}`]: {
      transition: 'none'
    }
  }
}));
exports.SliderRoot = SliderRoot;
const SliderRail = (0, _styled.default)('span', {
  name: 'MuiSlider',
  slot: 'Rail',
  overridesResolver: (props, styles) => styles.rail
})(({
  ownerState
}) => (0, _extends2.default)({
  display: 'block',
  position: 'absolute',
  borderRadius: 'inherit',
  backgroundColor: 'currentColor',
  opacity: 0.38
}, ownerState.orientation === 'horizontal' && {
  width: '100%',
  height: 'inherit',
  top: '50%',
  transform: 'translateY(-50%)'
}, ownerState.orientation === 'vertical' && {
  height: '100%',
  width: 'inherit',
  left: '50%',
  transform: 'translateX(-50%)'
}, ownerState.track === 'inverted' && {
  opacity: 1
}));
exports.SliderRail = SliderRail;
const SliderTrack = (0, _styled.default)('span', {
  name: 'MuiSlider',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track
})(({
  theme,
  ownerState
}) => {
  const color =
  // Same logic as the LinearProgress track color
  theme.palette.mode === 'light' ? (0, _system.lighten)(theme.palette[ownerState.color].main, 0.62) : (0, _system.darken)(theme.palette[ownerState.color].main, 0.5);
  return (0, _extends2.default)({
    display: 'block',
    position: 'absolute',
    borderRadius: 'inherit',
    border: '1px solid currentColor',
    backgroundColor: 'currentColor',
    transition: theme.transitions.create(['left', 'width', 'bottom', 'height'], {
      duration: theme.transitions.duration.shortest
    })
  }, ownerState.size === 'small' && {
    border: 'none'
  }, ownerState.orientation === 'horizontal' && {
    height: 'inherit',
    top: '50%',
    transform: 'translateY(-50%)'
  }, ownerState.orientation === 'vertical' && {
    width: 'inherit',
    left: '50%',
    transform: 'translateX(-50%)'
  }, ownerState.track === false && {
    display: 'none'
  }, ownerState.track === 'inverted' && {
    backgroundColor: theme.vars ? theme.vars.palette.Slider[`${ownerState.color}Track`] : color,
    borderColor: theme.vars ? theme.vars.palette.Slider[`${ownerState.color}Track`] : color
  });
});
exports.SliderTrack = SliderTrack;
const SliderThumb = (0, _styled.default)('span', {
  name: 'MuiSlider',
  slot: 'Thumb',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.thumb, styles[`thumbColor${(0, _capitalize.default)(ownerState.color)}`], ownerState.size !== 'medium' && styles[`thumbSize${(0, _capitalize.default)(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  position: 'absolute',
  width: 20,
  height: 20,
  boxSizing: 'border-box',
  borderRadius: '50%',
  outline: 0,
  backgroundColor: 'currentColor',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: theme.transitions.create(['box-shadow', 'left', 'bottom'], {
    duration: theme.transitions.duration.shortest
  })
}, ownerState.size === 'small' && {
  width: 12,
  height: 12
}, ownerState.orientation === 'horizontal' && {
  top: '50%',
  transform: 'translate(-50%, -50%)'
}, ownerState.orientation === 'vertical' && {
  left: '50%',
  transform: 'translate(-50%, 50%)'
}, {
  '&:before': (0, _extends2.default)({
    position: 'absolute',
    content: '""',
    borderRadius: 'inherit',
    width: '100%',
    height: '100%',
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.size === 'small' && {
    boxShadow: 'none'
  }),
  '&::after': {
    position: 'absolute',
    content: '""',
    borderRadius: '50%',
    // 42px is the hit target
    width: 42,
    height: 42,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  [`&:hover, &.${_sliderClasses.default.focusVisible}`]: {
    boxShadow: `0px 0px 0px 8px ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.16)` : (0, _system.alpha)(theme.palette[ownerState.color].main, 0.16)}`,
    '@media (hover: none)': {
      boxShadow: 'none'
    }
  },
  [`&.${_sliderClasses.default.active}`]: {
    boxShadow: `0px 0px 0px 14px ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.16)` : (0, _system.alpha)(theme.palette[ownerState.color].main, 0.16)}`
  },
  [`&.${_sliderClasses.default.disabled}`]: {
    '&:hover': {
      boxShadow: 'none'
    }
  }
}));
exports.SliderThumb = SliderThumb;
const SliderValueLabel = (0, _styled.default)(_SliderValueLabel.default, {
  name: 'MuiSlider',
  slot: 'ValueLabel',
  overridesResolver: (props, styles) => styles.valueLabel
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  [`&.${_sliderClasses.default.valueLabelOpen}`]: {
    transform: `${ownerState.orientation === 'vertical' ? 'translateY(-50%)' : 'translateY(-100%)'} scale(1)`
  },
  zIndex: 1,
  whiteSpace: 'nowrap'
}, theme.typography.body2, {
  fontWeight: 500,
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.shortest
  }),
  transform: `${ownerState.orientation === 'vertical' ? 'translateY(-50%)' : 'translateY(-100%)'} scale(0)`,
  position: 'absolute',
  backgroundColor: (theme.vars || theme).palette.grey[600],
  borderRadius: 2,
  color: (theme.vars || theme).palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.25rem 0.75rem'
}, ownerState.orientation === 'horizontal' && {
  top: '-10px',
  transformOrigin: 'bottom center',
  '&:before': {
    position: 'absolute',
    content: '""',
    width: 8,
    height: 8,
    transform: 'translate(-50%, 50%) rotate(45deg)',
    backgroundColor: 'inherit',
    bottom: 0,
    left: '50%'
  }
}, ownerState.orientation === 'vertical' && {
  right: ownerState.size === 'small' ? '20px' : '30px',
  top: '50%',
  transformOrigin: 'right center',
  '&:before': {
    position: 'absolute',
    content: '""',
    width: 8,
    height: 8,
    transform: 'translate(-50%, -50%) rotate(45deg)',
    backgroundColor: 'inherit',
    right: -8,
    top: '50%'
  }
}, ownerState.size === 'small' && {
  fontSize: theme.typography.pxToRem(12),
  padding: '0.25rem 0.5rem'
}));
exports.SliderValueLabel = SliderValueLabel;
const SliderMark = (0, _styled.default)('span', {
  name: 'MuiSlider',
  slot: 'Mark',
  shouldForwardProp: prop => (0, _styled.slotShouldForwardProp)(prop) && prop !== 'markActive',
  overridesResolver: (props, styles) => {
    const {
      markActive
    } = props;
    return [styles.mark, markActive && styles.markActive];
  }
})(({
  theme,
  ownerState,
  markActive
}) => (0, _extends2.default)({
  position: 'absolute',
  width: 2,
  height: 2,
  borderRadius: 1,
  backgroundColor: 'currentColor'
}, ownerState.orientation === 'horizontal' && {
  top: '50%',
  transform: 'translate(-1px, -50%)'
}, ownerState.orientation === 'vertical' && {
  left: '50%',
  transform: 'translate(-50%, 1px)'
}, markActive && {
  backgroundColor: (theme.vars || theme).palette.background.paper,
  opacity: 0.8
}));
exports.SliderMark = SliderMark;
const SliderMarkLabel = (0, _styled.default)('span', {
  name: 'MuiSlider',
  slot: 'MarkLabel',
  shouldForwardProp: prop => (0, _styled.slotShouldForwardProp)(prop) && prop !== 'markLabelActive',
  overridesResolver: (props, styles) => styles.markLabel
})(({
  theme,
  ownerState,
  markLabelActive
}) => (0, _extends2.default)({}, theme.typography.body2, {
  color: (theme.vars || theme).palette.text.secondary,
  position: 'absolute',
  whiteSpace: 'nowrap'
}, ownerState.orientation === 'horizontal' && {
  top: 30,
  transform: 'translateX(-50%)',
  '@media (pointer: coarse)': {
    top: 40
  }
}, ownerState.orientation === 'vertical' && {
  left: 36,
  transform: 'translateY(50%)',
  '@media (pointer: coarse)': {
    left: 44
  }
}, markLabelActive && {
  color: (theme.vars || theme).palette.text.primary
}));
exports.SliderMarkLabel = SliderMarkLabel;
const useUtilityClasses = ownerState => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', dragging && 'dragging', marked && 'marked', orientation === 'vertical' && 'vertical', track === 'inverted' && 'trackInverted', track === false && 'trackFalse', color && `color${(0, _capitalize.default)(color)}`, size && `size${(0, _capitalize.default)(size)}`],
    rail: ['rail'],
    track: ['track'],
    mark: ['mark'],
    markActive: ['markActive'],
    markLabel: ['markLabel'],
    markLabelActive: ['markLabelActive'],
    valueLabel: ['valueLabel'],
    thumb: ['thumb', disabled && 'disabled', size && `thumbSize${(0, _capitalize.default)(size)}`, color && `thumbColor${(0, _capitalize.default)(color)}`],
    active: ['active'],
    disabled: ['disabled'],
    focusVisible: ['focusVisible']
  };
  return (0, _base.unstable_composeClasses)(slots, _sliderClasses.getSliderUtilityClass, classes);
};
const Forward = ({
  children
}) => children;
const Slider = /*#__PURE__*/React.forwardRef(function Slider(inputProps, ref) {
  var _ref, _slots$root, _ref2, _slots$rail, _ref3, _slots$track, _ref4, _slots$thumb, _ref5, _slots$valueLabel, _ref6, _slots$mark, _ref7, _slots$markLabel, _ref8, _slots$input, _slotProps$root, _slotProps$rail, _slotProps$track, _slotProps$thumb, _slotProps$valueLabel, _slotProps$mark, _slotProps$markLabel, _slotProps$input;
  const props = (0, _useThemeProps.default)({
    props: inputProps,
    name: 'MuiSlider'
  });
  const theme = (0, _useTheme.default)();
  const isRtl = theme.direction === 'rtl';
  const {
      'aria-label': ariaLabel,
      'aria-valuetext': ariaValuetext,
      'aria-labelledby': ariaLabelledby,
      // eslint-disable-next-line react/prop-types
      component = 'span',
      components = {},
      componentsProps = {},
      color = 'primary',
      classes: classesProp,
      className,
      disableSwap = false,
      disabled = false,
      getAriaLabel,
      getAriaValueText,
      marks: marksProp = false,
      max = 100,
      min = 0,
      orientation = 'horizontal',
      size = 'medium',
      step = 1,
      scale = Identity,
      slotProps,
      slots,
      track = 'normal',
      valueLabelDisplay = 'off',
      valueLabelFormat = Identity
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = (0, _extends2.default)({}, props, {
    isRtl,
    max,
    min,
    classes: classesProp,
    disabled,
    disableSwap,
    orientation,
    marks: marksProp,
    color,
    size,
    step,
    scale,
    track,
    valueLabelDisplay,
    valueLabelFormat
  });
  const {
    axisProps,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    focusedThumbIndex,
    range,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap,
    getThumbStyle
  } = (0, _useSlider.useSlider)((0, _extends2.default)({}, ownerState, {
    rootRef: ref
  }));
  ownerState.marked = marks.length > 0 && marks.some(mark => mark.label);
  ownerState.dragging = dragging;
  ownerState.focusedThumbIndex = focusedThumbIndex;
  const classes = useUtilityClasses(ownerState);

  // support both `slots` and `components` for backward compatibility
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : SliderRoot;
  const RailSlot = (_ref2 = (_slots$rail = slots == null ? void 0 : slots.rail) != null ? _slots$rail : components.Rail) != null ? _ref2 : SliderRail;
  const TrackSlot = (_ref3 = (_slots$track = slots == null ? void 0 : slots.track) != null ? _slots$track : components.Track) != null ? _ref3 : SliderTrack;
  const ThumbSlot = (_ref4 = (_slots$thumb = slots == null ? void 0 : slots.thumb) != null ? _slots$thumb : components.Thumb) != null ? _ref4 : SliderThumb;
  const ValueLabelSlot = (_ref5 = (_slots$valueLabel = slots == null ? void 0 : slots.valueLabel) != null ? _slots$valueLabel : components.ValueLabel) != null ? _ref5 : SliderValueLabel;
  const MarkSlot = (_ref6 = (_slots$mark = slots == null ? void 0 : slots.mark) != null ? _slots$mark : components.Mark) != null ? _ref6 : SliderMark;
  const MarkLabelSlot = (_ref7 = (_slots$markLabel = slots == null ? void 0 : slots.markLabel) != null ? _slots$markLabel : components.MarkLabel) != null ? _ref7 : SliderMarkLabel;
  const InputSlot = (_ref8 = (_slots$input = slots == null ? void 0 : slots.input) != null ? _slots$input : components.Input) != null ? _ref8 : 'input';
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const railSlotProps = (_slotProps$rail = slotProps == null ? void 0 : slotProps.rail) != null ? _slotProps$rail : componentsProps.rail;
  const trackSlotProps = (_slotProps$track = slotProps == null ? void 0 : slotProps.track) != null ? _slotProps$track : componentsProps.track;
  const thumbSlotProps = (_slotProps$thumb = slotProps == null ? void 0 : slotProps.thumb) != null ? _slotProps$thumb : componentsProps.thumb;
  const valueLabelSlotProps = (_slotProps$valueLabel = slotProps == null ? void 0 : slotProps.valueLabel) != null ? _slotProps$valueLabel : componentsProps.valueLabel;
  const markSlotProps = (_slotProps$mark = slotProps == null ? void 0 : slotProps.mark) != null ? _slotProps$mark : componentsProps.mark;
  const markLabelSlotProps = (_slotProps$markLabel = slotProps == null ? void 0 : slotProps.markLabel) != null ? _slotProps$markLabel : componentsProps.markLabel;
  const inputSlotProps = (_slotProps$input = slotProps == null ? void 0 : slotProps.input) != null ? _slotProps$input : componentsProps.input;
  const rootProps = (0, _base.useSlotProps)({
    elementType: RootSlot,
    getSlotProps: getRootProps,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    additionalProps: (0, _extends2.default)({}, (0, _shouldSpreadAdditionalProps.default)(RootSlot) && {
      as: component
    }),
    ownerState: (0, _extends2.default)({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
    className: [classes.root, className]
  });
  const railProps = (0, _base.useSlotProps)({
    elementType: RailSlot,
    externalSlotProps: railSlotProps,
    ownerState,
    className: classes.rail
  });
  const trackProps = (0, _base.useSlotProps)({
    elementType: TrackSlot,
    externalSlotProps: trackSlotProps,
    additionalProps: {
      style: (0, _extends2.default)({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap))
    },
    ownerState: (0, _extends2.default)({}, ownerState, trackSlotProps == null ? void 0 : trackSlotProps.ownerState),
    className: classes.track
  });
  const thumbProps = (0, _base.useSlotProps)({
    elementType: ThumbSlot,
    getSlotProps: getThumbProps,
    externalSlotProps: thumbSlotProps,
    ownerState: (0, _extends2.default)({}, ownerState, thumbSlotProps == null ? void 0 : thumbSlotProps.ownerState),
    className: classes.thumb
  });
  const valueLabelProps = (0, _base.useSlotProps)({
    elementType: ValueLabelSlot,
    externalSlotProps: valueLabelSlotProps,
    ownerState: (0, _extends2.default)({}, ownerState, valueLabelSlotProps == null ? void 0 : valueLabelSlotProps.ownerState),
    className: classes.valueLabel
  });
  const markProps = (0, _base.useSlotProps)({
    elementType: MarkSlot,
    externalSlotProps: markSlotProps,
    ownerState,
    className: classes.mark
  });
  const markLabelProps = (0, _base.useSlotProps)({
    elementType: MarkLabelSlot,
    externalSlotProps: markLabelSlotProps,
    ownerState,
    className: classes.markLabel
  });
  const inputSliderProps = (0, _base.useSlotProps)({
    elementType: InputSlot,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: inputSlotProps,
    ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(RootSlot, (0, _extends2.default)({}, rootProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(RailSlot, (0, _extends2.default)({}, railProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(TrackSlot, (0, _extends2.default)({}, trackProps)), marks.filter(mark => mark.value >= min && mark.value <= max).map((mark, index) => {
      const percent = (0, _useSlider.valueToPercent)(mark.value, min, max);
      const style = axisProps[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(MarkSlot, (0, _extends2.default)({
          "data-index": index
        }, markProps, !(0, _base.isHostComponent)(MarkSlot) && {
          markActive
        }, {
          style: (0, _extends2.default)({}, style, markProps.style),
          className: (0, _clsx.default)(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? /*#__PURE__*/(0, _jsxRuntime.jsx)(MarkLabelSlot, (0, _extends2.default)({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !(0, _base.isHostComponent)(MarkLabelSlot) && {
          markLabelActive: markActive
        }, {
          style: (0, _extends2.default)({}, style, markLabelProps.style),
          className: (0, _clsx.default)(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, index);
    }), values.map((value, index) => {
      const percent = (0, _useSlider.valueToPercent)(value, min, max);
      const style = axisProps[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === 'off' ? Forward : ValueLabelSlot;
      return (
        /*#__PURE__*/
        /* TODO v6: Change component structure. It will help in avoiding the complicated React.cloneElement API added in SliderValueLabel component. Should be: Thumb -> Input, ValueLabel. Follow Joy UI's Slider structure. */
        (0, _jsxRuntime.jsx)(ValueLabelComponent, (0, _extends2.default)({}, !(0, _base.isHostComponent)(ValueLabelComponent) && {
          valueLabelFormat,
          valueLabelDisplay,
          value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
          index,
          open: open === index || active === index || valueLabelDisplay === 'on',
          disabled
        }, valueLabelProps, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ThumbSlot, (0, _extends2.default)({
            "data-index": index
          }, thumbProps, {
            className: (0, _clsx.default)(classes.thumb, thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
            style: (0, _extends2.default)({}, style, getThumbStyle(index), thumbProps.style),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(InputSlot, (0, _extends2.default)({
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-labelledby": ariaLabelledby,
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values[index]
            }, inputSliderProps))
          }))
        }), index)
      );
    })]
  }));
});
 false ? 0 : void 0;
var _default = Slider;
exports["default"] = _default;

/***/ }),

/***/ 91835:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = SliderValueLabel;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _clsx = _interopRequireDefault(__webpack_require__(80391));
var _sliderClasses = _interopRequireDefault(__webpack_require__(51559));
var _jsxRuntime = __webpack_require__(56786);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useValueLabelClasses = props => {
  const {
    open
  } = props;
  const utilityClasses = {
    offset: (0, _clsx.default)(open && _sliderClasses.default.valueLabelOpen),
    circle: _sliderClasses.default.valueLabelCircle,
    label: _sliderClasses.default.valueLabelLabel
  };
  return utilityClasses;
};

/**
 * @ignore - internal component.
 */
function SliderValueLabel(props) {
  const {
    children,
    className,
    value
  } = props;
  const classes = useValueLabelClasses(props);
  if (!children) {
    return null;
  }
  return /*#__PURE__*/React.cloneElement(children, {
    className: (0, _clsx.default)(children.props.className)
  }, /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [children.props.children, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _clsx.default)(classes.offset, className),
      "aria-hidden": true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: classes.circle,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}
 false ? 0 : void 0;

/***/ }),

/***/ 48839:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  sliderClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Slider.default;
  }
}));
Object.defineProperty(exports, "sliderClasses", ({
  enumerable: true,
  get: function () {
    return _sliderClasses.default;
  }
}));
var _Slider = _interopRequireWildcard(__webpack_require__(25710));
Object.keys(_Slider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Slider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Slider[key];
    }
  });
});
var _sliderClasses = _interopRequireWildcard(__webpack_require__(51559));
Object.keys(_sliderClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sliderClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sliderClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 51559:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getSliderUtilityClass = getSliderUtilityClass;
var _utils = __webpack_require__(44268);
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(45058));
function getSliderUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiSlider', slot);
}
const sliderClasses = (0, _utils.unstable_generateUtilityClasses)('MuiSlider', ['root', 'active', 'colorPrimary', 'colorSecondary', 'disabled', 'dragging', 'focusVisible', 'mark', 'markActive', 'marked', 'markLabel', 'markLabelActive', 'rail', 'sizeSmall', 'thumb', 'thumbColorPrimary', 'thumbColorSecondary', 'track', 'trackInverted', 'trackFalse', 'thumbSizeSmall', 'valueLabel', 'valueLabelOpen', 'valueLabelCircle', 'valueLabelLabel', 'vertical']);
var _default = sliderClasses;
exports["default"] = _default;

/***/ }),

/***/ 28069:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(__webpack_require__(55601));
var _system = __webpack_require__(19659);
var _styled = _interopRequireDefault(__webpack_require__(76276));
var _useThemeProps = _interopRequireDefault(__webpack_require__(54061));
const Stack = (0, _system.createStack)({
  createStyledComponent: (0, _styled.default)('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  }),
  useThemeProps: inProps => (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiStack'
  })
});
 false ? 0 : void 0;
var _default = Stack;
exports["default"] = _default;

/***/ }),

/***/ 16854:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

'use client';

var _interopRequireDefault = __webpack_require__(92439);
__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "ZP", ({
  enumerable: true,
  get: function () {
    return _Stack.default;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _stackClasses.default;
  }
});
var _Stack = _interopRequireDefault(__webpack_require__(28069));
var _stackClasses = _interopRequireDefault(__webpack_require__(23539));

/***/ }),

/***/ 23539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getStackUtilityClass = getStackUtilityClass;
var _utils = __webpack_require__(44268);
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(45058));
function getStackUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiStack', slot);
}
const stackClasses = (0, _utils.unstable_generateUtilityClasses)('MuiStack', ['root']);
var _default = stackClasses;
exports["default"] = _default;

/***/ }),

/***/ 97928:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _base = __webpack_require__(93832);
const shouldSpreadAdditionalProps = Slot => {
  return !Slot || !(0, _base.isHostComponent)(Slot);
};
var _default = shouldSpreadAdditionalProps;
exports["default"] = _default;

/***/ })

};
;