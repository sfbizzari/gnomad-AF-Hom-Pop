import React, { PropTypes } from 'react'

import GenePageHOC from '../../../containers/GenePage'
import GeneInfo from '../GeneInfo'
import GeneSettings from '../GeneSettings'
import GeneRegion from '../RegionViewer'
import GnomadVariantTable from '../Table'

import {
  groupExonsByTranscript,
} from 'react-gnomad'

import css from './styles.css'

const AppGenePage = ({
  currentGene,
  variantSort,
  setCurrentGene,
  setVariantSort,
  gene,
  isFetching,
  variants,
  hasVariants,
}) => {
  if (isFetching || !gene) {
    return <div>Loading...!</div>
  }
  console.log(variants)
  return (
    <div className={css.genePage}>
      <GeneSettings
        currentGene={currentGene}
        setCurrentGene={setCurrentGene}
      />
      <div className={css.summary}>
        <GeneInfo gene={gene} />
      </div>
      <GeneRegion
        gene={gene}
      />
      <GnomadVariantTable
        variants={gene.minimal_gnomad_variants}
        variantSort={variantSort}
        setVariantSort={setVariantSort}
      />
    </div>
  )
}

AppGenePage.propTypes = {
  currentGene: PropTypes.string.isRequired,
  gene: PropTypes.object,
  variantSort: PropTypes.object.isRequired,
  setVariantSort: PropTypes.func.isRequired,
}

export default GenePageHOC(AppGenePage)
