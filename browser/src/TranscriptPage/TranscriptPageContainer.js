import PropTypes from 'prop-types'
import React from 'react'

import { referenceGenomeForDataset } from '../datasets'
import Query from '../Query'
import { withWindowSize } from '../windowSize'
import TranscriptPage from './TranscriptPage'

const AutosizedTranscriptPage = withWindowSize(TranscriptPage)

const query = `
query Transcript($transcriptId: String!, $referenceGenome: ReferenceGenomeId!) {
  transcript(transcript_id: $transcriptId, reference_genome: $referenceGenome) {
    reference_genome
    transcript_id
    transcript_version
    chrom
    strand
    start
    stop
    exons {
      feature_type
      start
      stop
    }
    gnomad_constraint {
      exp_lof
      exp_mis
      exp_syn
      obs_lof
      obs_mis
      obs_syn
      oe_lof
      oe_lof_lower
      oe_lof_upper
      oe_mis
      oe_mis_lower
      oe_mis_upper
      oe_syn
      oe_syn_lower
      oe_syn_upper
      lof_z
      mis_z
      syn_z
      pLI
      flags
    }
    exac_constraint {
      exp_syn
      obs_syn
      syn_z
      exp_mis
      obs_mis
      mis_z
      exp_lof
      obs_lof
      lof_z
      pLI
    }
    gene {
      gene_id
      gene_version
      reference_genome
      symbol
      name
      canonical_transcript_id
      mane_select_transcript {
        ensembl_id
        ensembl_version
        refseq_id
        refseq_version
      }
      hgnc_id
      omim_id
      chrom
      start
      stop
      strand
      exons {
        feature_type
        start
        stop
      }
    }
  }
}
`

const TranscriptPageContainer = ({ datasetId, transcriptId }) => (
  <Query
    query={query}
    variables={{ transcriptId, referenceGenome: referenceGenomeForDataset(datasetId) }}
    loadingMessage="Loading transcript"
    errorMessage="Unable to load transcript"
    success={data => data.transcript}
  >
    {({ data }) => {
      return <AutosizedTranscriptPage datasetId={datasetId} transcript={data.transcript} />
    }}
  </Query>
)

TranscriptPageContainer.propTypes = {
  datasetId: PropTypes.string.isRequired,
  transcriptId: PropTypes.string.isRequired,
}

export default TranscriptPageContainer
