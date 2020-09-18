/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ArrowRight20 } from '@carbon/icons-react';
import { DDS_PROMO_BANNER } from '../../../internal/FeatureFlags';
import PromoBanner from '../PromoBanner';
import React from 'react';
import Readme from '../README.stories.mdx';
import { text } from '@storybook/addon-knobs';

export default !DDS_PROMO_BANNER
  ? undefined
  : {
      title: 'Components|PromoBanner',
      parameters: {
        ...Readme.parameters,
        knobs: {
          PromoBanner: ({ groupId }) => ({
            copy: text(
              'Copy (copy):',
              "We've joined forces with Red Hat, but your support provider won't change.",
              groupId
            ),
            cta: {
              href: text('Href (cta.href):', 'https://example.com', groupId),
              copy: text('CTA copy (cta.copy):', 'Learn more', groupId),
              icon: <ArrowRight20 />,
            },
          }),
        },
      },
    };

export const Default = !DDS_PROMO_BANNER
  ? undefined
  : ({ parameters }) => {
      const { copy, cta } = parameters?.props?.PromoBanner ?? {};

      return (
        <PromoBanner
          banner={
            <svg width={136} height={32} viewBox="0 0 136 32">
              <title>{'Red_Hat'}</title>
              <g fillRule="nonzero" fill="none">
                <path
                  d="M27.91 18.37c2.745 0 6.719-.567 6.719-3.833a3.047 3.047 0 00-.068-.75L32.926 6.68c-.378-1.563-.71-2.27-3.456-3.644C27.341 1.951 22.703.15 21.33.15c-1.278 0-1.657 1.657-3.171 1.657-1.467 0-2.555-1.23-3.928-1.23-1.325 0-2.177.898-2.84 2.745 0 0-1.844 5.202-2.083 5.962a1.4 1.4 0 00-.048.427c0 2.023 7.968 8.66 18.65 8.66m7.145-2.51c.38 1.801.38 1.99.38 2.226 0 3.077-3.456 4.78-8.004 4.78-10.269 0-19.261-6.003-19.261-9.987 0-.55.113-1.095.33-1.6-3.692.19-8.47.852-8.47 5.064.004 6.901 16.378 15.421 29.346 15.421 9.939 0 12.446-4.496 12.446-8.046 0-2.8-2.413-5.962-6.767-7.857"
                  fill="#E00"
                />
                <path
                  d="M35.055 15.862c.38 1.8.38 1.989.38 2.225 0 3.077-3.456 4.78-8.004 4.78-10.269 0-19.261-6.003-19.261-9.987 0-.55.113-1.095.33-1.6l.8-1.988a1.4 1.4 0 00-.048.427c0 2.023 7.968 8.66 18.65 8.66 2.745 0 6.719-.568 6.719-3.834a3.047 3.047 0 00-.068-.75l.502 2.067zM127.201 20.416c0 2.601 1.57 3.878 4.432 3.878a11.428 11.428 0 002.602-.37V20.9a5.445 5.445 0 01-1.685.254c-1.177 0-1.617-.37-1.617-1.479v-4.64h3.418v-3.117h-3.418V7.97l-3.74.8v3.14h-2.471v3.117h2.471l.008 5.389zm-11.623.068c0-.8.8-1.2 2.03-1.2a9.354 9.354 0 012.218.277v1.57c-.715.39-1.518.589-2.332.577-1.2 0-1.916-.462-1.916-1.224m1.14 3.856c1.317 0 2.38-.276 3.372-.947v.739h3.694v-7.826c0-2.98-2.001-4.618-5.357-4.618-1.869 0-3.716.438-5.703 1.338l1.339 2.748c1.433-.6 2.633-.969 3.696-.969 1.546 0 2.33.6 2.33 1.823v.6a10.875 10.875 0 00-2.77-.346c-3.14 0-5.033 1.317-5.033 3.672 0 2.147 1.709 3.786 4.432 3.786m-20.294-.2h3.97v-6.333h6.657v6.325h3.97V7.97h-3.97v6.203h-6.65V7.97h-3.97l-.007 16.17zm-15.133-6.117c0-1.755 1.385-3.096 3.202-3.096.95-.02 1.873.318 2.585.947v4.272a3.602 3.602 0 01-2.585.97c-1.801 0-3.202-1.34-3.202-3.093m5.84 6.117h3.695V7.153l-3.74.8v4.603a6.203 6.203 0 00-3.118-.8c-3.555 0-6.349 2.749-6.349 6.259a6.203 6.203 0 006.235 6.279 5.507 5.507 0 003.278-1.063v.909zm-16.945-9.383c1.176 0 2.169.76 2.563 1.939h-5.104c.37-1.225 1.294-1.939 2.54-1.939m-6.302 3.278c0 3.555 2.91 6.327 6.649 6.327 2.055 0 3.556-.555 5.102-1.847l-2.47-2.201c-.577.6-1.432.924-2.448.924a3.158 3.158 0 01-3.001-1.939h8.704v-.924c0-3.878-2.602-6.673-6.165-6.673a6.273 6.273 0 00-6.371 6.327m-6.443-6.674c1.316 0 2.055.833 2.055 1.825 0 .993-.739 1.823-2.055 1.823h-3.924v-3.648h3.924zm-7.896 12.769h3.972v-5.88h3.023l3.05 5.888h4.442l-3.556-6.466c1.917-.83 3.048-2.56 3.048-4.548 0-2.91-2.286-5.148-5.703-5.148h-8.276v16.154z"
                  fill="#000"
                />
              </g>
            </svg>
          }
          copy={copy}
          cta={cta}
        />
      );
    };