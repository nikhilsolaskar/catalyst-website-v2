import React from 'react';
import PropTypes from 'prop-types';
import { Textfit } from 'react-textfit';

import '../../css/members/MemberPreview.css';

export const scaleFontSize = (l) => {
  if (l < 15) return 15;
  if (l < 20) return 13;
  if (l < 30) return 10;
  return 15;
};

const MemberPreview = (props) => {
  const {
    name, imageSrc, isSelected, onSelect,
  } = props;
  const selectedStyling = isSelected ? 'MemberPreview-selected' : 'MemberPreview-unselected';
  return (
    <div
      className="MemberPreview-member"
      onClick={onSelect}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    >
      <img src={imageSrc} alt={name} className={`MemberPreview-picture ${selectedStyling}`} />
      <div className="MemberPreview-name">
        <Textfit max={20} mode="single">
          {name}
        </Textfit>
      </div>
    </div>
  );
};

MemberPreview.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MemberPreview;
